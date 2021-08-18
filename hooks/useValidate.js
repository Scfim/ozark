/**
 * @function validate is FrontEnd form validator for easily check fields
 * This is a simple object function with couple of stuffs
 */
const validate = {
  /**
   * CurrentValue parsed by the parse function and this value is untouchable
   * Just keep it as it is, only parse function can change its value
   */
  currentValue: "",
  currentErrors: [],
  /**
   *
   * @param {*} value get input data and parse it using parse() function
   * @returns the validator it self so you can access other validator's methods
   */
  parse(value) {
    this.currentValue = value;
    return this;
  },
  /**
   * Negative verifications will be into this not sub-object so that you could do something like this one below
   * yourValidator.parse(your data).not.empty or any other method contained in not object
   */
  not: {
    /**
     * Empty function tracks current value
     * @returns boolean checking whether the current value is empty or not
     */
    empty() {
      if (
        validate.currentValue !== "" &&
        /\w+/i.test(validate.currentValue)
      ) {
        validate.value = validate.currentValue;
        validate.currentErrors = [];
        return true;
      } else {
        validate.value = undefined;
        validate.currentErrors.push({
          type: "Invalid input, Exception",
          msg: "Empty string on empty function() in useValidate hook, check your code",
        });
        console.error({
          type: "Invalid input, Exception",
          msg: "Empty string on empty function() in useValidate hook, check your code",
        });
        return false;
      }
    },
    undefined(){

    },
    null(){

    },
    eun(){
      
    }
  },
  getValue() {
    if (this.value !== undefined) return this.value;
  },
};

export default validate;
