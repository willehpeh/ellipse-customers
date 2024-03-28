export interface BaseRepository<T> {
  save(entity: T): Promise<void>;
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  update(id: string, entity: T): Promise<void>;
  remove(id: string): Promise<void>;
}
