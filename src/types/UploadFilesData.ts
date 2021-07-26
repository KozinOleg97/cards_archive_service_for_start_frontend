import TestData from "@/types/TestData";

export default interface UploadFilesData {
  selectedFiles: any;
  currentFile: unknown;
  progress: number;
  message: string;
  fileInfos: [];
  testData: TestData;
}