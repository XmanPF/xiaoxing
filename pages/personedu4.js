import Image from "next/image";
import Link from "next/link";
import car1 from "../images/personedu4/car1.png";
import focus01 from "../images/personedu4/focus01.png";
import focus02 from "../images/personedu4/focus02.png";
import focus03 from "../images/personedu4/focus03.jpg";
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
              rules={[{ required: true, message: "请选择学历" }]}
              className={styles.colorFff}
              isLink
              name="picker"
              label="学历"
              trigger="onConfirm"
              onClick={(_, action) => {
                action.current?.open();
              }}
            >
              <Picker
                popup
                columns={[
                  "其他",
                  "小学",
                  "初中",
                  "中专",
                  "高中",
                  "大专",
                  "本科",
                ]}
              >
                {(val) => val || "请选择学历"}
              </Picker>
            </Form.Item>
            <Form.Item
              className={styles.colorFff}
              rules={[{ required: true, message: "请先勾选" }]}
              name="checkbox"
              label="是否同意授权"
              valuePropName="checked"
            >
              <Checkbox shape="square" />
            </Form.Item>
            <div className={styles.check}>
              查看
              <Link href="/private" className={styles.colorLink}>
                《个人信息授权与隐私政策》
              </Link>
            </div>
          </Form>
        </div>
        {[focus01, focus02, focus03].map((item, index) => {
          return <Image key={index} src={item} />;
        })}
      </div>
    </>
  );
}
