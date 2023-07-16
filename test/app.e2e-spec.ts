import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/comments (GET)', () => {
    return request(app.getHttpServer()).get('/comments').expect(200).expect([]);
  });

  it('/comments (POST)', () => {
    return request(app.getHttpServer())
      .post('/comments')
      .send({ body: 'Коммент' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            body: expect.any(String),
          }),
        );
      });
  });

  it('/comments (GET)', () => {
    return request(app.getHttpServer())
      .get('/comments')
      .expect(200)
      .expect([
        {
          id: 1,
          body: 'Коммент',
        },
      ]);
  });

  it('/tasks (GET)', () => {
    return request(app.getHttpServer()).get('/tasks').expect(200).expect([]);
  });

  it('/tasks (POST)', () => {
    return request(app.getHttpServer())
      .post('/tasks')
      .send({ title: 'опа', body: 'тело' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
          }),
        );
      });
  });

  it('/tasks (GET)', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200)
      .expect([
        {
          id: 1,
          title: 'опа',
          body: 'тело',
        },
      ]);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
