import Image from "next/image";
import Link from "next/link";
import car1 from "../images/car1/car1.jpg";
import focus1 from "../images/car1/focus1.jpg";
import focus2 from "../images/car1/focus2.jpg";
import focus3 from "../images/car1/focus3.jpg";
import focus01 from "../images/car1/focus01.jpg";
import focus02 from "../images/car1/focus02.jpg";
import focus03 from "../images/car1/focus03.jpg";
import tip from "../images/car1/tip.jpg";
import { Button, Input, Form, Toast, Picker, Checkbox } from "react-vant";
import styles from "./car.module.css";
import "../app/globals.css";

export default function Page() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    Toast.info("提交成功");
  };
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <div>
        <Image src={car1} alt="Next.js logo" />
        <div className={styles.formWrap}>
          <Form
            onFinish={onFinish}
            form={form}
            className={styles.rvCell}
            footer={
              <div style={{ margin: "16px 16px 0" }}>
                <Button round nativeType="submit" type="primary" block>
                  提交
                </Button>
              </div>
            }
          >
            <Form.Item
              rules={[{ required: true, message: "请填写姓名" }]}
              name="username"
              label="姓名"
              className={styles.colorFff}
            >
              <Input placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item
              className={styles.colorFff}
              type="number"
              rules={[{ required: true, message: "请填写手机号" }]}
              name="phone"
              label="手机号"
            >
              <Input placeholder="请填写手机号" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "请选择城市" }]}
              className={styles.colorFff}
              isLink
              name="picker"
              label="城市"
              trigger="onConfirm"
              onClick={(_, action) => {
                action.current?.open();
              }}
            >
              <Picker
                popup
                columns={[
                  "南京",
                  "苏州",
                  "常州",
                  "淮安",
                  "扬州",
                  "南通",
                  "宿迁",
                  "泰州",
                  "无锡",
                ]}
              >
                {(val) => val || "请选择城市"}
              </Picker>
            </Form.Item>
            <Form.Item  className={styles.colorFff} rules={[{ required: true, message: "请先勾选" }]} name="checkbox" label="是否同意授权" valuePropName="checked">
              <Checkbox shape="square" />
            </Form.Item>
            查看
            <Link href="/private" className={styles.colorLink}>
            《个人信息授权与隐私政策》
            </Link>
          </Form>
        </div>
        {[focus01, focus02, focus03, focus1, focus2, focus3].map(
          (item, index) => {
            return <Image key={index} src={item} />;
          }
        )}
        <Image src={tip} alt="Next.js logo" />
      </div>
    </>
  );
}
