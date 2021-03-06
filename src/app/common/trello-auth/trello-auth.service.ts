import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {TRELLO_SECRET_KEY} from './trello-secret-key';

@Injectable()
export class TrelloAuthService {

  public token: string;

  /**
   * the user api-key assigned by Trello, to identify the application when talking to Trello.
   * @type {string}
   */
  public apiKey = '827fb4984f305a7aff600e7087d1934d';

  public loginBaseUrl1 = `https://api.trello.com/1/authorize?response_type=token&key=${this.apiKey}&return_url=`;
  public loginBaseUrl2 = '&callback_method=fragment&scope=read%2Cwrite%2Caccount&expiration=never&name=Trello+UI';

  constructor(private router: Router) {
    this.token = localStorage.getItem(TRELLO_SECRET_KEY);
  }

  getToken(): string | undefined {
    return localStorage.getItem(TRELLO_SECRET_KEY);
  }

  login() {
    window.location.href = this.assembleUrl();
  }


  assembleUrl(): string {
    const returnUrl = encodeURI(window.location.href + 'set-token');
    return `https://trello.com/1/authorize?response_type=token&key=${this.apiKey}&return_url=${returnUrl}&callback_method=fragment&scope=read%2Cwrite%2Caccount&expiration=never&name=TrelloUI`;
  }

  async logout(): Promise<void> {
    localStorage.removeItem(TRELLO_SECRET_KEY);
    await this.router.navigate(['/']);
  }

  setToken(token: string): void {
    return localStorage.setItem(TRELLO_SECRET_KEY, token);
  }

}
