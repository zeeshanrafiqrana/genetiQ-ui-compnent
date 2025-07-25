# GenetiQ Health Dashboard

A comprehensive health monitoring and genetics analysis platform that provides real-time health data tracking, aging diagnostics, and personalized health insights.

![GenetiQ Dashboard](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-07-26%2002-48-07-goF3YpJULtlPnn2HLw2X679hPoQ6Rw.png)

## Features

### 🧬 Genetic Analysis

- **Aging Diagnostics**: Biological age assessment using Tru Diagnostics
- **DunedinPACE**: Advanced aging pace calculation and monitoring
- **Personalized Health Reports**: Comprehensive genetic health insights

### 📊 Real-Time Health Monitoring

- **Heart Rate Tracking**: Continuous BPM monitoring
- **Blood Sugar Levels**: Real-time glucose monitoring (mg/dL)
- **Blood Pressure**: Systolic/Diastolic pressure tracking (mmHg)

### 🏥 Health System Analysis

- **Cardiovascular System**: Heart health scoring and monitoring
- **Digestive System**: Gut health and digestive function analysis
- **Metabolic System**: Metabolism efficiency and health scoring

### 💊 Integrated Services

- **GenetiQ Pharmacy**: Personalized medication and supplement recommendations
- **Goal Setting**: Health target setting and progress tracking
- **Data Management**: Comprehensive health data organization

## Tech Stack

- **Frontend**: React.js with modern UI components
- **Styling**: Tailwind CSS for responsive design
- **Charts**: Interactive health data visualizations
- **Real-time Data**: WebSocket connections for live health metrics
- **Authentication**: Secure user authentication system

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v22.0.0 or higher)
- npm or yarn package manager
- Git

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zeeshanrafiqrana/genetiQ-ui-compnent.git
   cd genetiQ-ui-compnent
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

## Development

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run test suite
- `npm run type-check` - Run TypeScript type checking

## Building for Production

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

### Docker Deployment

1. **Build Docker image**

   ```bash
   docker build -t genetiq-dashboard .
   ```

2. **Run Docker container**
   ```bash
   docker run -p 3000:3000 genetiq-dashboard
   ```

## Project Structure

```
GENETIQ/
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── common/         # Shared components
│   │   │   ├── InformationCardWrapper/
│   │   ├── header/         # Header components
│   │   │   ├── Header/
│   │   │   ├── Navbar/
│   │   │   └── NavLinks/
│   │   ├── patient-avatar/ # Patient-specific components
│   │   │   ├── OptionMenu/
│   │   │   └── PatientAvatar/
│   │   ├── patient-details/
│   │   ├── aging-information/
│   │   │   └── AgingInformationCard/
│   │   ├── lifestyle-information/
│   │   │   └── LifestyleInformationCard/
│   │   ├── result-information/
│   │   │   ├── ResultHealthInformationCard/
│   │   │   ├── PatientDetails/
│   │   │   └── PatientInformationWrapper/
│   │   └── sidebar/        # Sidebar components
│   │       ├── IconWrapper/
│   │       └── Sidebar/
│   ├── constants/          # Application constants
│   │   └── mockdata.ts
│   └── routes/             # Application routing
│       ├── AppRoutes/
│       └── App/
├── index.html              # HTML entry point
├── main.tsx               # Application entry point
├── themes.ts              # Theme configuration
├── vite.config.ts         # Vite configuration
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lock file
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # Node TypeScript configuration
└── README.md              # Project documentation
```

## API Integration

### Health Monitoring APIs

- Real-time health data collection
- Wearable device integration
- Medical device connectivity

### Genetics Analysis APIs

- Tru Diagnostics integration
- DunedinPACE calculations
- Genetic report generation

### Data Management

- Secure health data storage
- HIPAA-compliant data handling
- User privacy protection

## Features in Detail

### Dashboard

- Personalized health overview
- Real-time metric displays
- Health trend visualizations
- Quick access to all features

### Goals Management

- Custom health goal setting
- Progress tracking
- Achievement notifications
- Personalized recommendations

### Health Reports

- Comprehensive health analysis
- Genetic predisposition reports
- Aging assessment reports
- Downloadable PDF reports

### Pharmacy Integration

- Personalized supplement recommendations
- Medication interaction checking
- Direct ordering capabilities
- Prescription management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## License

This project is licensed under the MIT License - see the [LICENSE]() file for details.

```

```
