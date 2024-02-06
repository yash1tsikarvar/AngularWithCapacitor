import {DocumentTask} from './document-task.model';

export interface ProofOfIncome {
  applicantName: string;
  applicantId: number;
  decline: boolean;
  reportStatus: string;
  task: DocumentTask[];
  enable: boolean;
}
