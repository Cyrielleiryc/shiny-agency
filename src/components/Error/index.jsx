import styled from "styled-components"
import colors from "../../utils/style/colors"
import error404 from "../../assets/404.svg"

const ErrorContainer = styled.div`
  margin: 30px;
  background-color: ${colors.backgroundLight};
  align-items: center;
  display: flex;
  flex-direction: column;
`

const ErrorText = styled.h1`
  font-weight: 300;
  font-size: 30px;
  color: black;
`

const ErrorImage = styled.img`
  maw-width: 800px;
`

function Error() {
  return (
    <ErrorContainer>
      <ErrorText>Oups...</ErrorText>
      <ErrorImage src={error404} alt= "error" />
      <ErrorText>Il semblerait qu'il y ait un problème</ErrorText>
    </ErrorContainer>
  )
}

export default Error
