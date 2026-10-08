import * as React from 'react';
import { 
  Html, 
  Body, 
  Container, 
  Section, 
  Heading, 
  Text, 
  Button, 
  Hr, 
  Tailwind 
} from '@react-email/components';


interface EmailTemplateProps {
  firstName: string;
  additionalName: string;
  emailAddress: string;
  message: string;
}

export default function EmailTemplate({ firstName, additionalName, emailAddress, message }: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Tailwind>
        <Body className="bg-slate-50 font-sans my-auto mx-auto">
          <Container className="bg-white border border-solid border-slate-200 rounded my-[40px] mx-auto p-[20px] max-w-[465px] shadow-sm">
            <Heading className="text-slate-800 text-[24px] font-normal text-center px-2 my-[30px] mx-0">
              Lackverket form was submitted
            </Heading>

            <Section className='text-start my-6'>
              <Text className="text-slate-600 text-[14px] leading-6">
                First-name: <strong>{firstName}</strong>
            </Text>
            <Text className="text-slate-600 text-[14px] leading-6">
                Last-name: <strong>{additionalName}</strong>
            </Text>
            <Text className="text-slate-600 text-[14px] leading-6">
                E-mail: <strong>{emailAddress}</strong>
            </Text>
            <Text className="text-slate-600 text-[14px] leading-6">
                Message: <strong>{message}</strong>
            </Text>
            </Section>
            

            {/* Instead of a raw <div> container, use <Section> */}
            <Section className="text-center mt-8 mb-8">
              <Button
                className="bg-indigo-600 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={ `mailto:${emailAddress}` }
              >
                Send client an e-mail
              </Button>
            </Section>

            <Hr className="border border-solid border-slate-200 my-[26px]" />
            
            <Text className="text-slate-400 text-[12px] leading-6 px-5">
              This template was created by GB. It automatically sends a mail when a potential client submits the form on www.lackverket.se
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}