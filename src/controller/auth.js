class Controller {
  #dispatch;
  initialState = { email: "", password: "", repassword: "" };
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  signup(creds) {}
  signin(creds) {}
}

export { Controller };
