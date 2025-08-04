import React from 'react';
import { useState } from 'react';
import './regist.css';
import { Toast,Dialog } from "react-vant";

function App() {
  const [phone, setPhone] = useState('')
  const [selected, setSelected] = useState(false)
  const handleGet = () => {
    console.log(phone)
    if (!phone) {
      Toast.info('请输入手机号')
      return
    }
    if (!selected) {
      Toast.info('请勾选同意《注册服务协议》及《隐私政策》')
      return
    }
    Toast.info('经后台统计，您当前账户未有配额')
  }

  const showXieyi = () => {
    Dialog.alert({
      title: '注册服务协议',
      message: '1111',
    }).then(() => {
      // on close
    });
  }

  const showZhenggce = () => {
    Dialog.alert({
      title: '隐私政策',
      message: '2222',
    }).then(() => {
      // on close
    });
  }

  return (
    <div className="main-container">
      <header className="header">
        <img src="/statics/e8838e564206425fa7619996638b5cea.png" alt="logo" className="logo-img" />
        <div className="header-info">
          <h2>最高可借额度(元)</h2>
          <div className="amount">200,000</div>
          <div className="rate-desc-wrap">
            <span className="rate">年化利率(单利)7.2%-24%</span>
            <span className="desc">借1万元分12期日息费1.2元起</span>
          </div>
        </div>
      </header>
      <section className="actions">
        <div className="phone-input-wrap">
          <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/phone.svg" alt="手机" width="20" height="20" />
          <input
            className="phone-input"
            type="tel"
            placeholder="请输入手机号"
            maxLength={11}
            value={phone}
            onChange={(e) => { setPhone(e.target.value) }}
          />
        </div>

        <button className="check-quota" onClick={handleGet}>
          查看我的额度
        </button>
        <div className="agreement-row">
          <input type="checkbox" id="agree" value={selected} onChange={(e) => setSelected(e.target.checked)} />
          <label htmlFor="agree">阅读并同意<a onClick={showXieyi}>《注册服务协议》</a>及<a onClick={showZhenggce}>《隐私政策》</a></label>
        </div>
        <div className="coupon-info">
          <img width={30} src="/statics/52fc4a5d14a245659743fb67f3dd089d.png" alt="优惠券" />
          该券最高免息65元，借12期享最后1期免息
        </div>
        <button className="get-benefit" onClick={handleGet}>
          <img width={30} src="/statics/05e23841381c42acb94761512fb45958.png" alt="福利" />
          申领福利
        </button>
      </section>
      <section className="reasons">
        <h3>帮助千万用户解决问题</h3>
        <ul>
          <li><img src="/statics/543413534aa647b2a4bc5b7f2d1d1906.png" alt="消费" />日常消费</li>
          <li><img src="/statics/543413534aa647b2a4bc5b7f2d1d1906.png" alt="应急" />安心应急</li>
          <li><img src="/statics/543413534aa647b2a4bc5b7f2d1d1906.png" alt="周转" />资金周转</li>
        </ul>
      </section>
      <section className="rules">
        <h3>活动规则</h3>
        <ol>
          <li>活动时间：即日起-2025年12月31日</li>
          <li>活动对象：首次完成注册的用户</li>
          <li>活动奖励：30天息费优惠券<br />本券仅适用于分期还款，且选择借款时长&gt;=12个月的可选用，使用该券后可减免最后一期的息费，最高可减免65元；若发生提前还款，逾期等情况，本券将自动作废。</li>
          <li>查看息费优惠券：APP—我的—优惠券</li>
          <li>活动介绍：<br />从未注册过的用户，活动期间通过此页面完成注册，下载APP，并完成额度申请，授信通过后可获得一张最长30天息费优惠券，有效期为自兑换成功起7天内有效。借款时可选择使用，仅适用十二期及以上分期借款产品，仅用户正常还款时可用。优惠减免金额上限为65元。优惠券的具体使用以APP内使用规则为准。</li>
          <li>若发现有恶意参与或作弊行为，有权不予赠送息费优惠券，在法律法规允许范围内，活动最终解释权归所有。</li>
          <li>如有任何疑问，可关注微信公众号进行咨询。活动详情可咨询客服</li>
        </ol>
      </section>
      <footer className="footer">
        <div>
         版权所有
        </div>
        <div>贷款有风险，借款需谨慎</div>
      </footer>
    </div>
  );
}

export default App;
