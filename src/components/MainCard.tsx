import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface MainCardProps {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  border?: boolean;
  divider?: boolean;
  content?: boolean;
  contentSX?: SxProps<Theme>;
  boxShadow?: boolean;
  shadow?: string;
  sx?: SxProps<Theme>;
  [key: string]: any;
}

export default function MainCard({
  title,
  subheader,
  action,
  children,
  border = false,
  divider = true,
  content = true,
  contentSX = {},
  boxShadow = false,
  shadow,
  sx = {},
  ...others
}: MainCardProps) {
  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease-in-out',
        ...(border && {
          border: `1px solid ${theme.palette.divider}`
        }),
        ...(boxShadow && {
          boxShadow: shadow || '0 2px 8px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: shadow || '0 4px 16px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)'
          }
        }),
        ...(typeof sx === 'function' ? sx(theme) : sx)
      })}
      {...others}
    >
      {title && (
        <Box
          sx={(theme) => ({
            px: 3,
            py: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'transparent',
            borderBottom: divider ? `1px solid ${theme.palette.divider}` : 'none'
          })}
        >
          <Box sx={{ flex: 1 }}>
            {typeof title === 'string' ? (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  lineHeight: 1.4,
                  mb: subheader ? 0.5 : 0
                }}
              >
                {title}
              </Typography>
            ) : (
              title
            )}
            {subheader && (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mt: 0.5,
                  fontSize: '0.875rem'
                }}
              >
                {subheader}
              </Typography>
            )}
          </Box>
          {action && (
            <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
              {action}
            </Box>
          )}
        </Box>
      )}

      {content ? (
        <CardContent
          sx={(theme) => ({
            p: 3,
            '&:last-child': {
              pb: 3
            },
            ...(typeof contentSX === 'function' ? contentSX(theme) : contentSX)
          })}
        >
          {children}
        </CardContent>
      ) : (
        children
      )}
    </Card>
  );
}

