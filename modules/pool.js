const { PoolConnection, PoolCluster } = require('promise-mysql');
const poolPromise=require('../config/database');
module.exports={
    queryParam:async(query)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const pool =await poolPromise;
                const connection=await pool.getConnection();
                try {
                    const result=await connection.query(query);
                    // pool.release(connection);
                    resolve(result);
                } catch (error) {
                    // pool.release(connection);
                    reject(error);
                }
            } catch (error) {
                reject(error);
            }
        });
    },
    queryParamArr:async(query,value)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const pool = await poolPromise;
                const connection = await pool.getConnection();
                try {
                    const result = await connection.query(query,value);
                    // pool.release(connection);
                    resolve(result);
                } catch (error) {
                    // pool.release(connection);
                    resolve(error);
                }
            } catch (error) {
                reject(error);
            }
        })
    },
    Transaction:async(...args)=>{
        
    }
}