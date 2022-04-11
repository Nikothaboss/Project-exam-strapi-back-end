module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '061477146410e6e3b1c380238ebd6db7'),
  },
});
