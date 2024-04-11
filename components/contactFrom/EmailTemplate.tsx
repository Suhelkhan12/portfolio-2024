interface EmailProps {
  username: string;
  message: string;
}

const EmailTemplate = ({ message, username }: EmailProps) => {
  return (
    <div>
      <h1>Hi, {username}</h1>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;
