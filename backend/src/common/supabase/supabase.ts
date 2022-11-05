import { createClient } from '@supabase/supabase-js'

import { getConfiguration } from '../../config/configuration'

const config = getConfiguration()

const supabase = createClient(config.supabase.projectUrl, config.supabase.apiKey)

export = supabase
