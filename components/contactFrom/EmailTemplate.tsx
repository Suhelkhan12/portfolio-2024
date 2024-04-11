interface EmailTemplateProps {
  username: string;
  message: string;
}

const EmailTemplate = ({ message, username }: EmailTemplateProps) => {
  return (
    <div>
      <h1>Hi, {username}</h1>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;
