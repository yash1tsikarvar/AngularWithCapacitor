import { Component, OnInit } from '@angular/core'
import { environment } from '../../environments/environment'

@Component({
  selector: 'tev-chatbot',
  templateUrl: './chatbot.component.html',
})
export class ChatBotComponent implements OnInit {
  chatbotBackendUrl = environment.chatbotBackendUrl
  chatbotWidgetUrl = environment.chatbotWidgetUrl

  constructor() {}

  loadChatbot() {
    const chatbotBackendUrl = this.chatbotBackendUrl
    const chatbotWidgetUrl = this.chatbotWidgetUrl

    if (chatbotBackendUrl) {
      const Window = window as any
      var v = document.createElement('script')
      var s = document.getElementsByTagName('script')[0]

      v.onload = function () {
        Window.loadChatbot({
          chatBotUrl: `wss://${chatbotBackendUrl}/ws/tenantev`,
          sessionBaseUrl: `https://${chatbotBackendUrl}`,
        })
      }
      v.src = `https://${chatbotWidgetUrl}/widget/widget.js`
      v.type = 'module'
      s.parentNode.insertBefore(v, s)
    }
  }

  ngOnInit() {
    this.loadChatbot()
  }
}
