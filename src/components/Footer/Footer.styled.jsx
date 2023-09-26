import styled from 'styled-components';

// Create a container for the footer
export const FooterContainer = styled.footer`
  /* position: relative; */
  padding: 40px 20px 18px;
  border-top: 1px solid rgba(243, 243, 243, 0.2);

  @media (min-width: 768px) {
    padding: 80px 32px 24px;
  }

  @media (min-width: 1024px) {
    padding: 80px 100px 24px;
  }
`;

// Create a flex container
export const FlexContainer = styled.div`
  max-width: 375px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 768px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const FooterGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    column-gap: 419px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: initial;
  }
`;

export const FooterTextTop = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f3f3f37e;
  transition: border 0.3s ease;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-right: 18px;
  }

  @media (max-width: 768px) {
    margin-right: 14px;
    margin-top: 80px;
    margin-bottom: 8px;
  }
`;

export const FooterTextButton = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f3f3f37e;
  transition: border 0.3s ease;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:not(:last-child) {
    margin-right: 14px;

    @media (min-width: 768px) {
      margin-right: 18px;
    }
  }
`;
