import { ReactNode } from 'react';
import classnames from 'classnames';
import { Container, Paragraph, Footer, Div, Image, FooterButton, Span } from './style';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <Container className={classnames(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered}
      )}>
      <Paragraph>{content}</Paragraph>
      <Footer>
        <Div className="user-info">
          <Image src={author.avatar} alt={author.name} />
          <Span>{author.name}</Span>
        </Div>
        <div>{children}</div>
      </Footer>
    </Container>
  )
}

export { FooterButton };
