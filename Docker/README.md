This folder contains custom docker related files.

There is a nginx configuration that uses environment variables $ENV_DOMAIN and maybe others to configure the nginx server.

These environment variables are set in the kubernetes deployment file, and are injected at the moment of pod creation.

The entrypoint.sh file is the script that is executed when the container is started. It is responsible for replacing the environment variables in the nginx configuration file and then starting the nginx server.
