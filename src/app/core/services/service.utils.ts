export class ServiceUtils {

  /**
   * Base64 Decode.
   *
   * See {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding}
   *
   * @param str
   * @returns {string}
   */
  static b64DecodeUnicode(str) {
    // Going backwards: from byte stream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  static decodeToken(token: string) {
    return JSON.parse(ServiceUtils.b64DecodeUnicode(token.split('.')[1]));
  }

}
