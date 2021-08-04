/**
 * @param {*} url 
 * @returns uuid if it is matched in the url
 */
const getUuidFromURL = (url) => {
  const currentURL = url.toString();
  /**
   * @const uuidRegExInURL get uuid regular from the url
   */
  const uuidRegExInURL =
    /[a-f0-9]{8}(\-[a-f0-9]{4}){3}[a-f0-9]{12}/;
  /**
   * @const uuidRegEx get uuid regular expression only
   */
  const uuidRegEx =
    /^[a-f0-9]{8}(\-[a-f0-9]{4}){3}\-[a-f0-9]{12}$/i;
  if (uuidRegExInURL.test(currentURL)) {
    const getUuid = currentURL.split("/user")[1];
    if (uuidRegEx.test(getUuid.substr(1))) {
      return getUuid.substr(1).trim();
    }
  }
};

export default getUuidFromURL;
