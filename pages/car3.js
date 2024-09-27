import Image from "next/image";
import Link from "next/link";
import car1 from "../images/car3/car1.jpg";
import focus01 from "../images/car3/focus01.jpg";
import focus02 from "../images/car3/focus02.jpg";
import focus03 from "../images/car3/focus03.jpg";
import tip from "../images/car3/tip.jpg";
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
                  "上海",
                  "北京",
                  "深圳",
                  "重庆",
                  "广州",
                  "成都",
                  "天津",
                  "东莞",
                  "武汉",
                  "杭州",
                  "南京",
                  "苏州",
                  "常州",
                  "淮安",
                  "扬州",
                  "南通",
                  "宿迁",
                  "泰州",
                  "无锡",
                  "赣州市",
                  "高雄市",
                  "高雄县",
                  "固原市",
                  "广安市",
                  "广元市",
                  "广州市",
                  "贵港市",
                  "贵阳市",
                  "桂林市",
                  "果洛藏族自治州",
                  "哈尔滨市",
                  "哈密地区",
                  "海外",
                  "海北藏族自治州",
                  "海东地区",
                  "海口市",
                  "海南藏族自治州",
                  "海西蒙古族藏族自治州",
                  "邯郸市",
                  "汉中市",
                  "杭州市",
                  "合肥市",
                  "和田地区",
                  "河池市",
                  "河源市",
                  "菏泽市",
                  "贺州市",
                  "鹤壁市",
                  "鹤岗市",
                  "黑河市",
                  "衡水市",
                  "衡阳市",
                  "红河哈尼族彝族自治州",
                  "呼和浩特市",
                  "呼伦贝尔市",
                  "湖州市",
                  "葫芦岛市",
                  "花莲县",
                  "怀化市",
                  "淮安市",
                  "淮北市",
                  "淮南市",
                  "黄冈市",
                  "黄南藏族自治州",
                  "黄山市",
                  "黄石市",
                  "惠州市",
                  "鸡西市",
                  "基隆市",
                  "吉安市",
                  "吉林市",
                  "济南市",
                  "济宁市",
                  "济源市",
                  "佳木斯市",
                  "嘉兴市",
                  "嘉义市",
                  "嘉义县",
                ]}
              >
                {(val) => val || "请选择城市"}
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
        {/* <Image src={tip} /> */}
        {[focus01, focus02, focus03].map((item, index) => {
          return <Image key={index} src={item} />;
        })}
      </div>
    </>
  );
}
