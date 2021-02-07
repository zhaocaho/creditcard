import { App } from 'vue'
import { Button, Form, Input, Spin, Result } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export function setAntDesign(app: App<Element>) {
  app.use(Button)
  app.use(Form)
  app.use(Input)
  app.use(Spin)
  app.use(Result)
}
