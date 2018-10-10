import { Form, Input, Button } from 'antd';
import ApiKeyPopover from './Menu.Main.Popover.ApiKey.js';

const FormItem = Form.Item;

const MenuMain = Form.create()(
  class extends React.Component {
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 14
        }
      };
      const tailFormItemLayout = {
        wrapperCol: {
          span: 18,
          offset: 6
        }
      };
      const save = () => {
        const { apiKey } = this.props.form.getFieldsValue();
        if (apiKey) {
          window.localStorage.setItem('apiKey', apiKey);
        }
      };

      return (
        <Form>
          <FormItem label="ApiKey" {...formItemLayout}>
            {getFieldDecorator('apiKey', {
              initialValue: window.localStorage.getItem('apiKey')
            })(<Input addonAfter={<ApiKeyPopover />} />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" onClick={save}>
              保存
            </Button>
          </FormItem>
        </Form>
      );
    }
  }
);

export default MenuMain;
