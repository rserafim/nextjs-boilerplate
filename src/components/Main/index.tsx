import * as S from './styles/'

const Main = ({ title = 'React avançado', description = 'testando' }) => (
  <main>
    <S.Title>{title}</S.Title>
    <p>{description}</p>
  </main>
)

export default Main
