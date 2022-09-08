import conn from '../../../lib/db'

export default async function handler(req, res) { 
try{
const query = `SELECT jsonb_build_object(
    'type',     'FeatureCollection',
    'features', jsonb_agg(feature)
  )
  FROM (
    SELECT jsonb_build_object(
      'type',       'Feature',
      'geometry',   ST_AsGeoJSON(geom)::jsonb,
      'properties', to_jsonb(inputs) - 'gid' - 'geom'
    ) AS feature
    FROM (
      SELECT * FROM public.pengs
    ) inputs
  ) features;`

  const result = await conn.query(
    query)
    res.json(result.rows[0].jsonb_build_object)
     } 
    catch (error){
        console.log(error);
        return(
            res.status(500).json({
                message: 'Error',
            })
        )
    }
}
    