import http from "@/http-common";

class UploadFilesService {

  upload(files: FileList, onUploadProgress: any): Promise<any> {
    //Нужно настроить для передачи имени файла
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i], files[i].name);
      console.log(files[i].name)

    }


    return http.post("/file/upload", formData, {

      headers: {
        "Content-Type": "multipart/form-data, charset=UTF-8"
      }
    });
  }

  //Заглушка(пока) для ответа после загрузки файла
  getUploadInfo(): Promise<any> {
    return http.get("file/test");
  }

}


export default new UploadFilesService();