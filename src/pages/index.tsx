import TopTenList from '@/components/TopTenList/TopTenList'
import PageLayout from '@/layouts/PageLayout'

const title =
	'Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве'

const description =
	'Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. Для вас всегда доступны бесплатные фильмы без регистрации на любой вкус: сериалы, фильмы, мультфильмы и многое другое.'

export default function Home() {
	return <PageLayout title={title} description={description}><TopTenList /></PageLayout>
}
