// Jenkinsfile (Declarative Pipeline)

pipeline {
    agent any    
    stages {
        stage('==> Checkout') {
            steps {
                checkout scm
            }
        }

        stage('==> increment version') {
            steps {
                script {
                    BRANCH_NAME = env.branch
                    // if we are merging to production branch, increment the minor version
                    if (BRANCH_NAME == 'production') {
                        VER = sh (script: 'npm version preminor --no-git-tag-version', returnStdout: true).trim()
                    } else {
                        VER = sh (script: 'npm version prerelease -preid ' + env.branch + ' --no-git-tag-version', returnStdout: true).trim()
                    }
                    VERSION = sh (script: 'cat package.json | grep version | head -1 | awk -F: \'{ print $2 }\' | sed \'s/[ ",]//g\' ' , returnStdout: true).trim() 
                }
                echo "Pushing version ${VERSION} changes to branch ${BRANCH_NAME}" 
                sh "git commit package.json -m \"${VERSION} by ${env.name} - SKIP-CI\" --no-verify" 
                sh "git push -f origin HEAD:\"${BRANCH_NAME}\" --no-verify" 
                sh "git tag \"${VERSION}\" "
                sh "git push -f origin HEAD:\"${BRANCH_NAME}\" --no-verify --tags" 
            }
        }

        stage('==> Build container image') {
            environment {
                def VERSION = sh (script: 'cat package.json | grep version | head -1 | awk -F: \'{ print $2 }\' | sed \'s/[ ",]//g\' ' , returnStdout: true).trim() 
                def LOGIN = ecrLogin()
            }
            steps {
                sh "echo === Build Image === "
                sh "echo Version = ${VERSION}"
                sh "${LOGIN}"
                sh 'docker build -t 348579843811.dkr.ecr.us-west-2.amazonaws.com/te-tenantev:${VERSION} . '
                sh "docker image push 348579843811.dkr.ecr.us-west-2.amazonaws.com/te-tenantev:${VERSION}"
            }
        }    

        stage('==> Trigger rundeck for deployment') {
            environment {
                def VERSION = sh script: 'cat package.json | grep version | head -1 | awk -F: \'{ print $2 }\' | sed \'s/[ ",]//g\' ' , returnStdout: true
            }
            steps {
                script {
                    // if production branch, do not deploy to rc environment
                    if (env.branch != 'production') {
                        echo "Update Enviroment: " + env.branch
                        sh "curl -H \"Content-Type: application/json\" -X POST -d \'{\"env_name\":\""+env.branch+"\"}\' http://rundeck-int.tev2.co:4440/api/44/webhook/eoTKFYCFs6jmcTmVl28ZmVdQ5ACbnR6k#Create_or_Update_Environment"
                    } else {
                        echo "Update Enviroment: qa"
                        sh "curl -H \"Content-Type: application/json\" -X POST -d \'{\"env_name\":\"qa\"}\' http://rundeck-int.tev2.co:4440/api/44/webhook/eoTKFYCFs6jmcTmVl28ZmVdQ5ACbnR6k#Create_or_Update_Environment"                    
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
            sh 'docker system prune -f --filter "until=24h"'
        }    
    }    
}
