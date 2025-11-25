import { create } from 'zustand';
import { fetchRecords } from '../backend/fetch/fetchRecords';

interface DataState {
  records: any[];
  loading: boolean;
  error: string | null;
  setRecords: (records: any[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchData: () => void;
}

const useDataStore = create<DataState>((set:any) => ({
  records: [],
  loading: false,
  error: null,

  setRecords: (records:any) => set({ records }),
  setLoading: (loading:any) => set({ loading }),
  setError: (error:any) => set({ error }),

  fetchData: async () => {
    fetchRecords(
      set().setRecords,
      set().setLoading,
      set().setError
    );
  },
}));

export default useDataStore;