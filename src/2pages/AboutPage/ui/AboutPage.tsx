import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = memo(function AboutPage (): JSX.Element {
  // about.json
  const { t } = useTranslation('about')

  return <div>{t('О сайте')}</div>
})

export default AboutPage
