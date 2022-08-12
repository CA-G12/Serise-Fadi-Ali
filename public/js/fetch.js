function fetch(method, url, inputData, cb) {
  const xhr = new XMLHttpRequest();
  const toBeSendData = JSON.stringify(inputData);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      cb(data);
    }
  };
  xhr.open(method, url);
  xhr.send(toBeSendData);
}
