const Check = ({ fill }: { fill?: string }) => {
  return (
    <svg
      className='h-6 w-6 mr-2'
      xmlns='http://www.w3.org/2000/svg'
      width='5'
      height='5'
      stroke='currentColor'
      fill={fill || '#10b981'}
      viewBox='0 0 1992 1992'
    >
      <path d='M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
    </svg>
  );
};

export default Check;
