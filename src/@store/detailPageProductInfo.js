import { selectorFamily } from 'recoil';

//fb
import { dbService } from '@/routes/fbase';
import { doc, getDoc } from 'firebase/firestore';

export const recoilProductInfoSelector = selectorFamily({
  key: 'InfoSelector',
  get: (id) => async () => {
    const docRef = doc(dbService, 'products', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  },
});
