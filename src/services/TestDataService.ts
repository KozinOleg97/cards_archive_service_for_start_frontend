import http from "@/http-common";

/* eslint-disable */

class TestDataService {

  get(): Promise<any> {
    return http.get(`/file/test`);
  }

}

export default new TestDataService();