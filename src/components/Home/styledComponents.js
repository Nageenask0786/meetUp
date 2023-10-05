import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  background-size: cover;
  min-height: 90vh;
`

export const Heading = styled.h1`
  font-weight: bold;
  color: #334155;
  font-family: 'Roboto';
  font-size: 40px;
  margin-bottom: 10px;
  padding-bottom: 0px;
`
export const Description = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 22px;
  padding-top: 0px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding-bottom: 15px;
`

export const RegisterButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 8px;
  border: 0px;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #2563eb;
  margin-top: 10px;
`

export const Image = styled.img`
  height: 70%;
  width: 60%;
  margin-top: 15px;
`
