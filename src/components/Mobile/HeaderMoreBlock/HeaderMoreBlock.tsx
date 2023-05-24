import BasicBtn from '@/components/UI/BasicBtn/BasicBtn'
import { SlDiamond } from 'react-icons/sl'
import { TbCertificate } from 'react-icons/tb'
import HeaderMobileFooter from './HeaderMobileFooter/HeaderMobileFooter'
import HeaderMobileMiddle from './HeaderMobileMiddle/HeaderMobileMiddle'
import style from './HeaderMoreBlock.module.scss'
import { useTranslation } from 'next-i18next'

const HeaderMoreBlock = () => {
  const { t } = useTranslation('header', { keyPrefix: 'mobile.more-block' })

  return (
    <article className={style.wrapper}>
      <div className={style.container}>
        <div className={style.top_buttons}>
          <BasicBtn btnType='icon' title={t('connect-subscription')} circle>
            <SlDiamond />
          </BasicBtn>
          <BasicBtn btnType='icon' title={t('certificate-activation')}>
            <TbCertificate />
          </BasicBtn>
        </div>

        <HeaderMobileMiddle />

        <nav className={style.ivi}>
          <p>{t('ivi-rating-films')}</p>
          <p>{t('ivi-rating-series')}</p>
        </nav>

        <HeaderMobileFooter />
      </div>
    </article>
  )
}

export default HeaderMoreBlock
