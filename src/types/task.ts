export default interface Task {
  id: number;
  title: string;
  assigneeName: string;
  assigneeAvatar: string;
  creationDate: string;
  status: string;
  description: string;
  relatedTasks: number[];
}