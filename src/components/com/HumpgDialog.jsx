import React from "react";
import {connect} from "react-redux";
import {Button, Form, Input, message, Modal, Radio} from "antd";

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const formItemLayoutArea = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

class HumpgDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            addLoading: false
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        let visible = this.props.visible || false;
        let visibleNew = nextProps.visible || false;
        if (visibleNew !== visible) {
            this.setState({
                visible: true
            });
        }
    }

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleOk = () => {
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    this.setState({ addLoading: true });
                    //.........
                    this.setState({ addLoading: false, visible: false });
                }
            },
        );
    };

    render() {
        const { title, submitText } = this.props;
        const { getFieldDecorator } = this.props.form;
        let visible = this.state.visible;
        let addLoading = this.state.addLoading;

        return (
            visible ?
                <Modal
                    visible={visible}
                    title={title}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="提交" type="primary" loading={addLoading} onClick={this.handleOk}>
                            {submitText}
                        </Button>,
                    ]}
                >
                    <div>

                        <FormItem
                            {...formItemLayout}
                            label="事件"
                        >
                            <span className="ant-form-text">刘德华申请公车机场接XXX来我院视察工作，批准人:李四</span>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="风险"
                        >
                            {getFieldDecorator('radio-group', {
                                rules: [{
                                    required: true,
                                    message: "请选择风险等级",
                                }],
                                initialValue: 1
                            })(
                                <RadioGroup>
                                    <Radio value={1}>一星</Radio>
                                    <Radio value={2}>二星</Radio>
                                    <Radio value={3}>三星</Radio>
                                    <Radio value={4}>无风险</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>

                        <FormItem {...formItemLayoutArea} label={"原因"}>
                            {getFieldDecorator('roleDes', {
                                rules: [{
                                    required: true,
                                    message: "请输入原因",
                                }]
                            })(
                                <TextArea autosize={{ minRows: 4, maxRows: 6 }} placeholder={"请输入原因"}/>
                            )}
                        </FormItem>

                        <style>
                            {`
                                .ant-col-4 {
                                    float:none
                                }
                                .ant-col-16 {
                                    float:none;
                                    left:16.66666667%;
                                }
                                .label{
                                    margin-bottom: 0px;
                                }
                        `}
                        </style>
                    </div>

                </Modal> : <div></div>
        );
    }

}

const mapStateToPorps = state => {
    const { auth } = state.httpData;
    return { auth };
};

export default connect(mapStateToPorps)(Form.create({})(HumpgDialog));