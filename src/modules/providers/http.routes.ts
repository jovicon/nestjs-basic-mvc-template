import { AppModule } from './core/app.module';
import { AppModule as ExampleModule } from './example/example.module';

export const routes = [
  {
    path: '/providers',
    module: AppModule,
    children: [
      {
        path: '/example',
        module: ExampleModule,
      },
    ],
  },
];
