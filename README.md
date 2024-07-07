# Desi Bites

Desi Bites is a full-stack food ordering app built with Next.js 14. The app features a robust authentication system, role-based access control, and an intuitive user interface for browsing menus, managing profiles, tracking orders, and processing payments.

## Features

- **Authentication:** Supports credential-based and social logins (Google, LinkedIn, GitHub) using Next.js Auth.
- **Role-Based Access Control:** Differentiates normal users and admin with distinct functionalities.
- **User Interface:**
  - Browse menus categorized by type
  - Manage profiles with photo uploads (stored in Amazon S3)
  - Track past orders with detailed checkout bills
  - Process payments using Stripe
- **Admin Interface:**
  - Manage categories and menu items with custom sizes and ingredients
  - Assign roles and edit user details
  - Monitor and manage all orders

## Technologies Used

- **Frontend:** Next.js 14, React
- **Authentication:** Next.js Auth
- **Storage:** Amazon S3
- **Payment Gateway:** Stripe
- **Database:** MongoDB atlas
- **Hosting:** Vercel

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repo
```sh
   git clone https://github.com/your-username/desi-bites.git
```
2. Install NPM packages
```npm
   npm install
```
3. Set up environment variables
Create a .env file in the root directory and add the necessary environment variables.
Run the development server

```env
MONGO_URL="mongodb+srv://your-username:your-password@cluster0.ata7hsl.mongodb.net/your-database"
NEXTAUTH_URL="http://localhost:3000/"
SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
MY_AWS_ACCESS_KEY="your-aws-access-key"
MY_AWS_SECRET_KEY="your-aws-secret-key"
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

4. Run the development server
```run
npm run dev
```
5. Open http://localhost:3000 with your browser to see the result.

### Note

Before running the application, make sure to set up the following:

- **Google OAuth Setup:** Set up Google OAuth credentials for authentication.
- **Amazon S3 Bucket:** Create an Amazon S3 bucket and configure it for image uploads.
- **Stripe Setup:** Set up Stripe for handling payments.

Ensure all necessary environment variables are correctly set in your `.env.local` file. If this file will be committed to a version control system (like Git), consider adding it to your `.gitignore` to prevent accidental commits of sensitive information.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Your Name - ([https://x.com/prabhu_4](https://x.com/prabhu_4)) - prabhusatyam4.4@gmail.com

Project Link: [https://github.com/prabhu4444/desi-bites](https://github.com/prabhu4444/Desi-Bites)

   
