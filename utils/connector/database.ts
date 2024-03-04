import sqlPool from '../../config/rds';

const executeQuery = async (
  query: string,
  params: any[] = [],
): Promise<any> => {
  const connection = await sqlPool.getConnection();
  try {
    const [results] = await connection.query(query, params);
    return results;
  } catch (error) {
    console.error(error);
    throw new Error('F500003');
  } finally {
    connection.release();
  }
};

export { executeQuery };
