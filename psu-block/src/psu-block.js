import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static get properties() {
    return {
      lineshape: { type: String, reflect: true},
      link: { type: String, reflect: true},

      boxtext1: { type: String, reflect: true},
      boxtext2: { type: String, reflect: true},

      stateOne: { type: Boolean, reflect: true},
      stateTwo: { type: Boolean, reflect: true},
      stateThree: { type: Boolean, reflect: true},
      stateFour: { type: Boolean, reflect: true},
      stateFive: { type: Boolean, reflect: true},
      stateSix: { type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return css`
    
    :host([boxtext1]) .content {                    
      font-family: 'Open Sans', sans-serif;
      font-size: 2.2rem;
      font-weight: 700;
      padding-top: 85px;
      padding-left: 60px;
      padding-right: 60px;
      z-index: 2;
    }
    :host([boxtext2]) .content2 {
      color: #1e407c;
      font-family: 'Open Sans', sans-serif;;
      font-size: 1rem;
      font-weight: 600;
      padding-top: 13px;
      z-index: 2;
    }
    .lineshape {
      color: #1e407c;
      background-color: #1e407c;
      font-size:  1.9px;
      margin-top: 30px;
    }

    :host([stateOne]) .card {
      background-color: #1e407c;
      color: #FFFFFF;
      width: 403.531px;
      height: 342.250px;
    }

    :host([stateTwo]) .card {
      background-color: #FFFFFF;
      color: #0b2344;
      width: 403.531px;
      height: 342.250px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
    
    :host([stateThree]) .card {
      background-image: linear-gradient(to bottom, #144fb6, #0b2344);
      width: 403.531px;
      height: 342.250px;
      font-size: .5rem;
      color: white;
    }
    
    :host([stateFour]) .card {
      color: white;
      background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg);
      width: 403.531px;
      height: 342.250px;
      background-size: cover;
    }
    :host([stateFour]) .cardoverlay{
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 3;
    }
    :host([stateFour]) .link {
      padding-left: 365px;
    }
    
    :host([stateFive]) .card {
      background-color: #001e44;
      color: #FFFFFF;
      width: 403.531px;
      height: 342.250px;
    }

    :host([stateSix]) .card {
      color: white;
      background-image: url(https://datadigest.psu.edu/files/2020/05/FallCampus2016-11.jpg);      
      background-size: cover;
      width: 403.531px;
      height: 342.250px;
    }
    
    :host([stateSix]) .cardoverlay{
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 3;
    }
    :host([stateSix]) .link {
      padding-left: 365px;
      padding-bottom: 10px;
    }

    :host(:hover) .link {
      transform: scale(1.3);
      padding-right: 400px;
      padding-bottom: 20px;
    }
  `;}

  constructor() {
    super();
    this.link=null;
  }

  render() {
    return html`
      <main>
        <div class="card"> 
          <div class="cardoverlay">           
                <div class="content">                   
              ${this.boxtext1}
              <div class="lineshape">
                ${this.lineshape}
              </div>
              <div class="content2">
                ${this.boxtext2}
              </div>
              </div>
              <div class="link">
                ${this.link ? html`<a href="https://admissions.psu.edu/apply/statistics/" class="card-link" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_173_1032" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9"></rect>
                        </mask>
                          <g mask="url(#mask0_173_1032)">
                            <path d="M4.22222 22C3.61111 22 3.08796 21.7824 2.65278 21.3472C2.21759 20.912 2 20.3889 2 19.7778V4.22222C2 
                            3.61111 2.21759 3.08796 2.65278 2.65278C3.08796 2.21759 3.61111 2 4.22222 2H10.8889C11.2037 2 11.4676 2.10648 
                            11.6806 2.31944C11.8935 2.53241 12 2.7963 12 3.11111C12 3.42593 11.8935 3.68981 11.6806 3.90278C11.4676 4.11574 
                            11.2037 4.22222 10.8889 4.22222H4.22222V19.7778H19.7778V13.1111C19.7778 12.7963 19.8843 12.5324 20.0972 12.3194C20.3102 
                            12.1065 20.5741 12 20.8889 12C21.2037 12 21.4676 12.1065 21.6806 12.3194C21.8935 12.5324 22 12.7963 22 13.1111V19.7778C22 
                            20.3889 21.7824 20.912 21.3472 21.3472C20.912 21.7824 20.3889 22 19.7778 22H4.22222ZM8.66667 15.3333C8.46296 15.1296 8.36111 
                            14.8704 8.36111 14.5556C8.36111 14.2407 8.46296 13.9815 8.66667 13.7778L18.2222 4.22222H15.3333C15.0185 4.22222 14.7546 4.11574 
                            14.5417 3.90278C14.3287 3.68981 14.2222 3.42593 14.2222 3.11111C14.2222 2.7963 14.3287 2.53241 14.5417 2.31944C14.7546 2.10648 15.0185 2 
                            15.3333 2H20.8889C21.2037 2 21.4676 2.10648 21.6806 2.31944C21.8935 2.53241 22 2.7963 22 3.11111V8.66667C22 8.98148 21.8935 9.24537 21.6806 
                            9.45833C21.4676 9.6713 21.2037 9.77778 20.8889 9.77778C20.5741 9.77778 20.3102 9.6713 20.0972 9.45833C19.8843 9.24537 19.7778 8.98148 19.7778 
                            8.66667V5.77778L10.1944 15.3611C9.99074 15.5648 9.74074 15.6667 9.44445 15.6667C9.14815 15.6667 8.88889 15.5556 8.66667 15.3333Z" 
                            fill="#CCE9FF"></path>
                          </g>
                    </svg>
                    </a>` : ``}
              </div>
            </div>
          </div>
    
      </main>
    `;
  }
}

customElements.define('psu-block', PsuBlock);