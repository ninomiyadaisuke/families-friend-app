import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';
import { z } from 'zod';

import { Form, PrimarySelect } from '@/components/forms';
import { Hero, HomeAbout, HomeService } from '@/components/home';
import { Layout } from '@/components/layouts';
import styles from '@/styles/test.module.scss';

const zodSchema = z.object({
  relationship: z.union([
    z.literal('世帯主'),
    z.literal('配偶者'),
    z.literal('子供'),
    z.literal('親'),
    z.literal('同居人'),
  ]),
});

const options = [{ value: '世帯主' }, { value: '配偶者' }, { value: '子供' }, { value: '親' }, { value: '同居人' }];

const initialState = {
  relationship: '',
};

type FormValues = typeof initialState;

const Home: NextPageWithLayout = () => {
  const login = (values: FormValues) => {
    // console.log(values);
  };
  return (
    <>
      {/* <Hero />
      <HomeAbout />
      <HomeService /> */}

      <div className={styles.test}>
        <Form<FormValues, typeof zodSchema>
          onSubmit={login}
          options={{ defaultValues: initialState }}
          schema={zodSchema}
        >
          {({ register, formState, control }) => (
            <>
              <PrimarySelect
                label="役割"
                // mandatory={true}
                options={options}
                selectLabel="役割を選択"
                registration={register('relationship')}
              />
              <button>送信</button>
            </>
          )}
        </Form>
      </div>
    </>
  );
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = baseLayout;

export default Home;
