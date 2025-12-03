// utils/getStatusStyle.js
export const getStatusStyle = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return {
        color: 'rgba(178, 106, 0, 1)',          // dark orange text
        backgroundColor: 'rgba(178, 106, 0, 1)', // light orange bg
        borderRadius: '16px',
        px: 2,
        py: 0.5,
        fontWeight: 500,
        textTransform: 'capitalize',
        display: 'inline-block',
      };

    case 'accepted':
      return {
        color: 'rgba(27, 94, 32, 1)',           // dark green text
        backgroundColor: 'rgba(200, 230, 201, 1)', // light green bg
        borderRadius: '16px',
        px: 2,
        py: 0.5,
        fontWeight: 300,
        textTransform: 'capitalize',
        display: 'inline-block',
      };

    case 'declined':
      return {
        color: 'rgba(183, 28, 28, 1)',          // dark red text
        backgroundColor: 'rgba(255, 205, 210, 1)', // light red bg
        borderRadius: '16px',
        px: 2,
        py: 0.5,
        fontWeight: 500,
        textTransform: 'capitalize',
        display: 'inline-block',
      };

    default:
      return {
        color: 'rgba(95, 99, 104, 1)',          // gray text
        backgroundColor: 'rgba(245, 245, 245, 1)', // light gray bg
        borderRadius: '16px',
        px: 2,
        py: 0.5,
        fontWeight: 500,
        textTransform: 'capitalize',
        display: 'inline-block',
      };
  }
};
