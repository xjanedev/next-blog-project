export interface AlertData {
    message: string;
    state: 'success' | 'error';
  };
  
  export default function Alert({
    alertbanner: { message, state },
  }: {
    alertbanner: AlertData;
  }) {
    const isSuccess = state === 'success';
    const icon = isSuccess ? '✅' : '🔥';
    return (
      <p
        className={`p-2 rounded-xl w-full text-center ${
          isSuccess ? 'bg-green-300' : 'bg-red-300'
        }`}
      >{`${icon} ${message}`}</p>
    );
  }
  