// utils/getStatusStyle.js
export const getStatusStyle = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return {
        color: 'rgba(178, 106, 0, 1)',          // dark orange text
        backgroundColor: 'rgba(255, 243, 224, 0.8)', // light orange bg
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
        backgroundColor: 'rgba(200, 230, 201, 0.3)', // light green bg
        borderRadius: '16px',
        px: 2,
        py: 0.5,
        fontWeight: 500,
        textTransform: 'capitalize',
        display: 'inline-block',
      };

    case 'declined':
      return {
        color: 'rgba(183, 28, 28, 1)',          // dark red text
        backgroundColor: 'rgba(255, 205, 210, 0.2)', // light red bg
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
        backgroundColor: 'rgba(245, 245, 245, 0.3)', // light gray bg
        borderRadius: '16px',
        px: 2,
        py: 0.5,
        fontWeight: 500,
        textTransform: 'capitalize',
        display: 'inline-block',
      };
  }
};
