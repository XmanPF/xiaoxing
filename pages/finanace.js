import Image from "next/image";
import Link from "next/link";
import car1 from "../images/finance/car1.jpeg";
import focus01 from "../images/finance/focus1.png";
import focus02 from "../images/finance/focus2.jpeg";
import focus03 from "../images/finance/focus3.jpeg";
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
           
            {/* <div className={styles.check}>
              查看
              <Link href="/private" className={styles.colorLink}>
                《个人信息授权与隐私政策》
              </Link>
            </div> */}
          </Form>
        </div>
        {/* <Image src={tip} /> */}
        {[focus01, focus02, focus03].map((item, index) => {
          return <Image key={index} src={item} />;
        })}
      </div>
    </>
  );
}
