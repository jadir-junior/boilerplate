import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átamo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para um tela com código."
    />
  </S.Wrapper>
)

export default Main
