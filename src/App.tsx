import "./styles.css";

export default function App() {
    /** POSTメソッド */
export const requestPost = (path: string, params: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    Axios.request(requestConfig('POST', path, params))
      .then((response: AxiosResponse) => {
        const responseData: ResponseData = response.data;
        // リザルトコードから準正常系を判断
        if (responseData.resultCode === RESULT_CODE.OK) {
          return resolve(response);
        } else {
          // 準正常系は異常系として返却
          const setReject: AxiosError = new AxiosError();
          setReject.response = response;
          return reject(setReject);
        }
      })
      .catch((error: AxiosError) => {
        return reject(error);
      });
  });
}v
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
